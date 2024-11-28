# 对应任务-评估学生的学习兴趣和认知水平
使用技术node.js=10.8.2 
## 初始化并下载echars依赖  

### 初始化

~~~
npm init -y
~~~

### 安装echars依赖

~~~
npm install echarts 
~~~

### 启动项目

~~~
npx serve .
~~~

## 



## 文件说明
knowledge_point.json和knowledge_point_trends.json存储数据，其中knowledge_point.json保存学生的知识点掌握情况，knowledge_point_trends.json保存学生的兴趣变化趋势

index.html是展示页面

## 效果演示
存在问题：计算学生兴趣变化趋势时，由于目前模型只获取知识点掌握情况的最后一个状态，还需要获取知识点掌握情况的开始和中间状态

![image](https://github.com/user-attachments/assets/6ba04403-892b-4021-b1e4-c1a78f47feaf)



