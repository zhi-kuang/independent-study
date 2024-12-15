# 对应任务
- 评估学生的学习兴趣和认知水平 http://localhost:3000
  
- 自动生成学情报告与分析 http://localhost:3000/class

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
## 访问路径
- 个人-评估学生的学习兴趣和认知水平 http://localhost:3000 

- 班级-自动生成学情报告与分析 http://localhost:3000/class

## 文件说明
### 个人-评估学生的学习兴趣和认知水平
knowledge_point.json和knowledge_point_trends.json存储数据，其中knowledge_point.json保存学生的知识点掌握情况，knowledge_point_trends.json保存学生的兴趣变化趋势
index.html是展示页面
### 班级-自动生成学情报告与分析
data.json 存储数据
class.html是展示页面

## 效果演示
### 个人-评估学生的学习兴趣和认知水平 http://localhost:3000
存在问题：计算学生兴趣变化趋势时，由于目前模型只获取知识点掌握情况的最后一个状态，还需要获取知识点掌握情况的开始和中间状态
![image](https://github.com/user-attachments/assets/6ba04403-892b-4021-b1e4-c1a78f47feaf)

### 班级-自动生成学情报告与分析 http://localhost:3000/class
![image](https://github.com/user-attachments/assets/b8121bbf-4375-45da-b881-5c54103f9a56)
![image](https://github.com/user-attachments/assets/283d4d6f-b12b-452f-868f-df001059495a)
![image](https://github.com/user-attachments/assets/696bc7e0-5735-495d-9ad0-0e849737b9f8)
![image](https://github.com/user-attachments/assets/7a7cc462-d668-45c7-a0a1-d6c9c876f016)

