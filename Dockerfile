FROM node:latest
RUN git clone https://github.com/methu45/Asfhjjukkkk3 /root/AxziRe
WORKDIR /root/AxziRe
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "index.js"]
