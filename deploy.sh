#!/bin/bash

echo "Deploy To S3 Bucket dbd-unicorn"
npm run build

mkdir ./build/test_result

cp ./build/index.html ./build/test_result/1.html
cp ./build/index.html ./build/test_result/2.html
cp ./build/index.html ./build/test_result/3.html
cp ./build/index.html ./build/test_result/4.html
cp ./build/index.html ./build/test_result/5.html
cp ./build/index.html ./build/test_result/6.html
cp ./build/index.html ./build/test_result/7.html
cp ./build/index.html ./build/test_result/8.html
cp ./build/index.html ./build/test_result/9.html

cp ./build/index.html ./build/wd.html
cp ./build/index.html ./build/ch.html
cp ./build/index.html ./build/cs.html
cp ./build/index.html ./build/st.html
cp ./build/index.html ./build/tr.html
cp ./build/index.html ./build/in.html
cp ./build/index.html ./build/su.html
cp ./build/index.html ./build/cl.html
cp ./build/index.html ./build/ju.html

sed -i '' -e 's/img_th_link1/img_th_kf_wizard/g' ./build/test_result/1.html
sed -i '' -e 's/img_th_link1/img_th_kf_chameleon/g' ./build/test_result/2.html
sed -i '' -e 's/img_th_link1/img_th_kf_choongsin/g' ./build/test_result/3.html
sed -i '' -e 's/img_th_link1/img_th_kf_star/g' ./build/test_result/4.html
sed -i '' -e 's/img_th_link1/img_th_kf_transparent/g' ./build/test_result/5.html
sed -i '' -e 's/img_th_link1/img_th_kf_inventor/g' ./build/test_result/6.html
sed -i '' -e 's/img_th_link1/img_th_kf_surfer/g' ./build/test_result/7.html
sed -i '' -e 's/img_th_link1/img_th_kf_clay/g' ./build/test_result/8.html
sed -i '' -e 's/img_th_link1/img_th_kf_judge/g' ./build/test_result/9.html

sed -i '' -e 's/img_th_link1/img_th_kf_wizard/g' ./build/test_result/wd.html
sed -i '' -e 's/img_th_link1/img_th_kf_chameleon/g' ./build/test_result/ch.html
sed -i '' -e 's/img_th_link1/img_th_kf_choongsin/g' ./build/test_result/cs.html
sed -i '' -e 's/img_th_link1/img_th_kf_star/g' ./build/test_result/st.html
sed -i '' -e 's/img_th_link1/img_th_kf_transparent/g' ./build/test_result/tr.html
sed -i '' -e 's/img_th_link1/img_th_kf_inventor/g' ./build/test_result/in.html
sed -i '' -e 's/img_th_link1/img_th_kf_surfer/g' ./build/test_result/su.html
sed -i '' -e 's/img_th_link1/img_th_kf_clay/g' ./build/test_result/cl.html
sed -i '' -e 's/img_th_link1/img_th_kf_judge/g' ./build/test_result/ju.html

aws s3 sync ./build/ s3://dbd-unicorn
aws cloudfront create-invalidation --distribution-id E1H3RXQY26KFNY --paths "/*"
