#!/bin/bash

echo "Deploy To S3 Bucket dbd-unicorn"
npm run build
aws s3 sync ./build/ s3://dbd-unicorn
aws cloudfront qinvalidation --distribution-id E1H3RXQY26KFNY --paths "/*"
