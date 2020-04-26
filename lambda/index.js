exports.handler = async (event) => {
  const atob = require('atob');
  const { Client } = require('pg');
  
  const connection = new Client({
    user : 'dbdlab',
    host : 'dbdlab-db.c0kpzkwjcd5t.ap-northeast-2.rds.amazonaws.com',
    database : 'dbdlab-db',
    password : 'elqlelfoq',
    port : 5432,
  });

  const queryPromise = (query, params) => new Promise((resolve, reject) => {
    connection.query(query, params, function (error, results, fields) {
      if (error) reject(error);
      resolve(results);
    });
  });

  connection.connect();
  let responseBody = {}

  if (event.requestContext.httpMethod === "POST") {
    const params = JSON.parse(event.body)
    const type = params.type

    const serviceName = decodeURIComponent(atob(params.sn));
    const userAnswer = decodeURIComponent(atob(params.ua));
    const uniqueID = params.uq;
    const unicornIndex = params.ui;

    let result = ""
    if (type === "submit") {
      result = await queryPromise(
        `INSERT INTO whonicorn_answer VALUES ('${uniqueID}', current_timestamp, '${serviceName}', '${userAnswer}', ${unicornIndex})`
      );
    } else if (type === "feedback") {
      const reaction_type = params.reaction_type;
      const positive = params.positive;
      result = await queryPromise(
        `INSERT INTO whonicorn_feedback VALUES ('${uniqueID}', current_timestamp, '${serviceName}', '${reaction_type}', ${params.positive}, ${unicornIndex})`
      );
    }

    console.log("Result", result);
    console.log("End Connect")
    connection.end();

    responseBody = {
      message: event.body,
      result,
    };

    return {
      statusCode: 200,
      body: "success"
    };
  } else if (event.requestContext.httpMethod === "GET") {
    const type = event.queryStringParameters.type
    if (type === "admin_get_counts") {
    
    } else if (type === "admin_get_list") {
  
    }
  }

  return {
    statusCode: 200,
    body: "success"
  };
};