export const en = {
    translation: {
        nav: [{label: "Home", url: "/"}, {label: "Template", url: "/template"}, {label: "User", url: "/user"}, {label: "Admin", url: "/admin"}],
        adminDashboard: {
            header: 'Admin Dashboard',
            buttonTitle: 'Manage',
            items:[
                {title: 'Manage Users', url: '/manageUsers', description: 'View, block, or remove users. Promote or demote users from admin role.'},
                {title: 'Manage Templates', url: '/manageTemplates', description: 'Edit or delete any user’s templates, or add new questions to them.'},
                {title: 'Manage users answers', url: '/manageUsersAnswers', description: 'Edit or delete any user’s answers.'},
                {title: 'Manage Tags', url: '/manageTags', description: 'Edit or delete any tags, or add new.'}
            ]
        },
        loading: "loading...",
        logOut: 'Logout',
        loginRegistration:{
            login:{
                title: 'Login',
                loginBtn: 'Login',
                redirectToRegister:{
                    text: 'Don\'t have an account? ',
                    linkText: 'Register here'
                }
            },
            registration:{
                title: 'Register',
                registerBtn: 'Register',
                redirectToLogin:{
                    text: 'Already have an account? ',
                    linkText: 'Login here'
                },
                name: 'Name',
                namePlaceHolder: 'Enter your name',
            },
            email: 'Email',
            emailPlaceHolder: 'Enter you email',
            password: 'Password',
            passwordPlaceHolder: 'Enter you password',
        },
    }
}