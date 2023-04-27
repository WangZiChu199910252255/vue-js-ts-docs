#!/bin/sh

# 注意：这个脚本没有区分 “测试环境” 和 “生产环境”

# 输出当前日期，便于调试
DATETIME=$( date "+%Y-%m-%d %H:%M:%S" )
echo "[Deploy] Time: ${DATETIME}"

# 基本信息
APP_NAME='docs.zhinenghao.net'
# 源文件目录
SRC_DIR=$( pwd )
# 构建产物目录
DIST_DIR="${SRC_DIR}/dist"
# 部署目标目录
DEST_DIR="/opt/case/${APP_NAME}"

# 源文件目录
SRC_DIR='./docs/.vitepress/dist'

SVR_US='43.135.165.226'
ENV='test'
SVR=$SVR_US
echo "[Deploy] Target env is: $SVR ($ENV)"
echo "[Deploy] Dest dir is: $DEST_DIR"

# 部署目标目录
SERVER_DIR="root@$SVR:$DEST_DIR"

scp -r "$DIST_DIR" "$SERVER_DIR"
