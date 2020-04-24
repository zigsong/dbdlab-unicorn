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

cp ./build/index.html ./build/home/wd.html
cp ./build/index.html ./build/home/ch.html
cp ./build/index.html ./build/home/cs.html
cp ./build/index.html ./build/home/st.html
cp ./build/index.html ./build/home/tr.html
cp ./build/index.html ./build/home/in.html
cp ./build/index.html ./build/home/su.html
cp ./build/index.html ./build/home/cl.html
cp ./build/index.html ./build/home/ju.html

sed -i '' -e 's/img_th_link1/img_th_kf_wizard/g' ./build/test_result/1.html
sed -i '' -e 's/img_th_link1/img_th_kf_chameleon/g' ./build/test_result/2.html
sed -i '' -e 's/img_th_link1/img_th_kf_choongsin/g' ./build/test_result/3.html
sed -i '' -e 's/img_th_link1/img_th_kf_star/g' ./build/test_result/4.html
sed -i '' -e 's/img_th_link1/img_th_kf_transparent/g' ./build/test_result/5.html
sed -i '' -e 's/img_th_link1/img_th_kf_inventor/g' ./build/test_result/6.html
sed -i '' -e 's/img_th_link1/img_th_kf_surfer/g' ./build/test_result/7.html
sed -i '' -e 's/img_th_link1/img_th_kf_clay/g' ./build/test_result/8.html
sed -i '' -e 's/img_th_link1/img_th_kf_judge/g' ./build/test_result/9.html

sed -i '' -e 's/img_th_link1/img_th_kf_wizard/g' ./build/home/wd.html
sed -i '' -e 's/img_th_link1/img_th_kf_chameleon/g' ./build/home/ch.html
sed -i '' -e 's/img_th_link1/img_th_kf_choongsin/g' ./build/home/cs.html
sed -i '' -e 's/img_th_link1/img_th_kf_star/g' ./build/home/st.html
sed -i '' -e 's/img_th_link1/img_th_kf_transparent/g' ./build/home/tr.html
sed -i '' -e 's/img_th_link1/img_th_kf_inventor/g' ./build/home/in.html
sed -i '' -e 's/img_th_link1/img_th_kf_surfer/g' ./build/home/su.html
sed -i '' -e 's/img_th_link1/img_th_kf_clay/g' ./build/home/cl.html
sed -i '' -e 's/img_th_link1/img_th_kf_judge/g' ./build/home/ju.html

aws s3 sync ./build/ s3://dbd-unicorn
aws cloudfront create-invalidation --distribution-id E1H3RXQY26KFNY --paths "/*"
