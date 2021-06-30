export default {

    // 表单实例
    'GET /api/form/index': {
        component: "page",
        style: {
            height: '100vh',
        },
        body: {
            component: "layout",
            cache: true,
            body: {
                component: "pageContainer",
                title: '基础表单',
                body: {
                    component: "card",
                    title: '基础表单',
                    headerBordered: true,
                    body: {
                        component: "form",
                        api: 'https://www.baidu.com',
                        layout: "horizontal",
                        labelCol:{ span: 2 },
                        wrapperCol: { span: 22 },
                        body: [
                            {
                                component: "textField",
                                label: "用户名",
                                name: "username",
                                style: {width: 200}
                            },
                            {
                                component: "passwordField",
                                label: "密码",
                                name: "password",
                                style: {width: 200}
                            },
                        ]
                    }
                }
            }
        }
    },
}
  