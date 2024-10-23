export const en = {
    translation: {
        nav: [{label: "Home", url: "/"}, {label: "Admin", url: "/admin"}, {label: "Forms", url: "/forms"}, {label: "my page", url: "/myPage"}],
        adminDashboard: {
            header: 'Admin Dashboard',
            buttonTitle: 'Manage',
            items:[
                {title: 'Manage Users', url: '/admin/users', description: 'View, block, or remove users. Promote or demote users from admin role.'},
                {title: 'Manage Forms', url: '/admin/manageForms', description: 'Edit or delete any user’s forms, or add new questions to them.'},
                {title: 'Manage users answers', url: '/admin/manageFilledForms', description: 'Edit or delete any user’s answers.'},
                {title: 'Manage Comments', url: '/admin/manageComments', description: 'Delete any comment'}
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
        usersPage:{
            title: 'Users',
            name: 'Name',
            email: "Email",
            role: "Role",
            status: "Status",
            admin: "Admin",
            user: "User",
            actions: "Actions",
            setAdminBtn: "Set admin",
            removeAdminBtn: "Remove admin",
            unblockUserBtn: "Unblock",
            blockUserBtn: "Block",
            deleteUserBtn: "Delete",
            blocked: 'Blocked',
            unblocked: 'Active',
            me: "me"
        }
    }
}