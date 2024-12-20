export const en = {
    translation: {
        nav: [{label: "Home", url: "/"}, {label: "Forms", url: "/forms"}, {label: "my page", url: "/myPage"}, {label: "Admin", url: "/admin"}],
        adminDashboard: {
            header: 'Admin Dashboard',
            buttonTitle: 'Manage',
            items: [
                {
                    title: 'Manage Users',
                    url: '/admin/users',
                    description: 'View, block, or remove users. Promote or demote users from admin role.'
                },
                {
                    title: 'Manage Forms',
                    url: '/admin/manageForms',
                    description: 'Edit or delete any user’s forms, or add new questions to them.'
                },
                {
                    title: 'Manage users answers',
                    url: '/admin/manageFilledForms',
                    description: 'Edit or delete any user’s answers.'
                },
                {title: 'Manage Comments', url: '/admin/manageComments', description: 'Delete any comment'}
            ]
        },
        home: "Home",
        loading: "loading...",
        logOut: 'Logout',
        loginRegistration: {
            login: {
                title: 'Login',
                loginBtn: 'Login',
                redirectToRegister: {
                    text: 'Don\'t have an account? ',
                    linkText: 'Register here'
                }
            },
            registration: {
                title: 'Register',
                registerBtn: 'Register',
                redirectToLogin: {
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
        usersPage: {
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
        },
        addImage: 'Add image',
        update: "Update",
        remove: 'Remove',
        title: 'Title',
        description: "Description",
        topic: "Topic",
        tags: "Tags",
        image: 'Image',
        deleteImage: 'Delete image',
        minOneQuestion: 'At least on question is required',
        edit: "Edit",
        save: "Save",
        create: 'Create',
        delete: 'delete',
        formFields: 'Form fields',
        fieldName: "Field name",
        fieldType: 'Field type',
        text: 'Text',
        textarea: 'Textarea',
        select: 'Select',
        boolean: 'Boolean',
        hiddenQuestion: 'Hidden question',
        cancel: 'Cancel',
        saveChanges: 'Save changes',
        addField: 'Add Field',
        selectOptions: 'Select Options',
        saveOption: 'Edit option',
        addOption: 'Add Option',
        reset: 'reset',
        searchByTitle: 'Search by title',
        allTags: 'All Tags',
        allAuthors: 'All Authors',
        usersAnswers: 'Users answers',
        noFilledForms: 'No filled forms',
        myForms:'My Forms',
        noForms:'No form to show',
        filledBy:'Filled by',
        filledOn:'Filled on',
        author:'Author',
        createdOn: 'Created on',
        comments:'Comments',
        writeComment: 'Write a comment',
        noComments :'No comments',
        formTitle: 'Form title',
        formAuthor: 'Form author',
        pageNotFound: 'Oops! Page Not Found',
        pageNoExist: 'The page you are looking for does not exist.',
        backHome:'Go Back to Home',
        question: 'Question',
        questionType: 'Question type',
        answer: 'Answer',
        forms: 'Forms',
        createForm: 'Create form',
        chooseTemplate: 'Choose template to create',
        createNewForm: 'Create new form',
        questions: 'Questions',
        allComments:'All comments',
        manageForms: 'Manage forms',
        searchForms: 'Search forms',
        searchWord: 'search word',
        search:' Search',
        filledForms: 'Filled Forms',
        fillAllFields: 'Fill all fields',
        notValidEmail: 'Not valid email',
        undefined: 'undefined',
        fillForm: 'fillForm',
        enterName: 'Please enter a name',
        isInUse: 'is already in use',
        minTwoOptions: 'Please add at least two options',
        yes: 'yes',
        no: 'no',
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        notValidPhone: 'Not valid phone',
        salesforceIntegration: 'Salesforce Integration',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        priority: "priority",
        High: "High",
        Medium: "Medium",
        Low: "Low",
        Open: "Sent",
        "Work in progress": "Work in progress",
        Done:"Done",
        createInJira: "Create task in jira",
        jiraTasks: 'Jira Tasks',
        createTask: 'Create Task',
        newTaskJira: 'Create a new task in Jira',
        noJiraTasks: "You have not created any Jira tasks yet",
        note: "Note"
    }
}