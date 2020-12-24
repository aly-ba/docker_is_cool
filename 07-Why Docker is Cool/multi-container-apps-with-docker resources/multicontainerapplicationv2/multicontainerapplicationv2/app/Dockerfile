FROM python:3.5

COPY requirements.txt /app/requirements.txt
COPY webapp.py /app/webapp.py

WORKDIR /app

RUN pip install -r requirements.txt

ENTRYPOINT ["python"]
CMD ["webapp.py"]
