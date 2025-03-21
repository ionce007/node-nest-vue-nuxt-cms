# 使用 Gitpod 的基础镜像
FROM gitpod/workspace-full

ARG NODE_VERSION=14
# 安装指定版本的 Node.js
RUN bash -c ". .nvm/nvm.sh && nvm install 14 && nvm alias default 14"