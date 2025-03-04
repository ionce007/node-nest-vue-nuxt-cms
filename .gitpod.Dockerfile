# 使用 Gitpod 的基础镜像
FROM gitpod/workspace-full-vnc

ARG NODE_VERSION=12.14.1
# 安装指定版本的 Node.js
RUN bash -c ". .nvm/nvm.sh && nvm install 12.14.1 && nvm alias default 12.14.1"