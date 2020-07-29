# studyDeno
deno学习

1. demo.ts deno server的简单demo

2. oak.ts oka的简单demo

3. todo oka框架的todo api demo

4. todo-mysql 连接mysql版的oka框架的todo api demo

⚠️ 使用denon进行文件热重载
```bash
# 升级deno
deno upgrade
#安装 denon
deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
# 查看denon指令
denon -h
# 运行服务
denon run --allow-env --allow-net demo.ts
```
