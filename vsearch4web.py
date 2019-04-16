from flask import Flask, render_template, request, escape
from vsearch import search4letters

from DBcm import UseDatabase

app = Flask(__name__)

app.config['dbconfig'] = { 'host': '127.0.0.1',
                            'user': 'vsearch',
                            'password': 'vsearchpasswd',
                            'database': 'vsearchlogDB',}

#with open('vsearch.log', 'a') as log:
    #print(req.form, req.remote_addr, req.user_agent, res, file=log, sep='|')
def log_request(req: 'flask_request', res: str) -> None:
    """Log details of the web request and the results."""
    #import mysql.connector

    #dbconfig = { 'host': '127.0.0.1',
    #             'user': 'vsearch',
    #             'password': 'vsearchpasswd',
    #             'database': 'vsearchlogDB',}

    #conn = mysql.connector.connect(**dbconfig)
    #cursor = conn.cursor()
    with UseDatabase(app.config['dbconfig']) as cursor:
        _SQL = """insert into log
                    (phrase, letters, ip, browser_string, results)
                    values
                    (%s, %s, %s, %s, %s)"""
        cursor.execute(_SQL, (req.form['phrase'],
                                req.form['letters'],
                                req.remote_addr,
                                req.user_agent.browser,
                                res, ))

    #conn.commit()
    #cursor.close()
    #conn.close()

@app.route('/search4', methods=['POST'])
def do_search():
    phrase = request.form['phrase']
    letters = request.form['letters']
    title = 'Here are your results:'
    results = str(search4letters(phrase, letters))
    log_request(request, results)
    return render_template('results.html',
                            the_phrase=phrase,
                            the_letters=letters,
                            the_title=title,
                            the_results=results,
                            the_request=request,)

@app.route('/viewlog')
def view_log() ->'html':
    #contents = []
    #with open('vsearch.log') as log:
    #    for line in log:
    #        contents.append([])
    #        for item in line.split('|'):
    #           contents[-1].append(escape(item))
    with UseDatabase(app.config['dbconfig']) as cursor:
        _SQL = """select phrase, letters, ip, browser_string, results from log"""

        cursor.execute(_SQL)
        contents = cursor.fetchall()

    titles = ('Phrase', 'Letters', 'Remote_addr', 'User_agent', 'Results')
    return render_template('viewlog.html',
                            the_title='View Log',
                            the_row_titles=titles,
                            the_data=contents,)

@app.route('/')
@app.route('/entry')
def entry_page():
    return render_template('entry.html', the_title='Welcome to search4letters on the web!')

if __name__ == '__main__':
    app.run(debug=True)
