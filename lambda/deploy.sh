zip -r function.zip .
aws lambda update-function-code --function-name whonicorn-api --zip-file fileb://function.zip --profile=jinyoung