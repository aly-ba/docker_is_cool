from flask import Flask
from redis import Redis


app = Flask(__name__)
redis = Redis(host='redis', port=6379)



@app.route('/')
def home():
    redis.incr('home')
    return 'home'

@app.route('/about')
def about():
    redis.incr('about')
    return 'about'

@app.route('/contact')
def contact():
    redis.incr('contact')
    return 'contact'

@app.route('/summary')
def summary():
    redis_iter = redis.scan_iter()
    results = ('<p>{key}:{value}</p>'.format(key=(k).decode('utf-8'), value=redis.get(k).decode('utf-8'))
                for k in redis_iter)
    return '\n'.join(results)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
