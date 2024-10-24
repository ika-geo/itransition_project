export const ge = {
    translation: {
        nav: [{label: "მთავარი", url: "/"}, {label: "ფორმები", url: "/forms"}, {label: "ჩემი გვერდი",url: "/myPage"}, {label: "ადმინი", url: "/admin"}],
        adminDashboard: {
            header: 'ადმინ პანელი',
            buttonTitle: 'მართვა',
            items: [
                {
                    title: 'მომხმარებლების მართვა',
                    url: '/admin/manageUsers',
                    description: 'მომხმარებლების ნახვა, დაბლოკვა ან წაშლა. მომხმარებლების დაწინაურება ან ჩამოშორება ადმინისტრატორის როლიდან.'
                },
                {
                    title: 'ფორმების მართვა',
                    url: '/admin/manageForms',
                    description: 'შეცვალეთ ან წაშალეთ ნებისმიერი მომხმარებლის ფორმა, ან დაამატეთ მათ ახალი კითხვები.'
                },
                {
                    title: 'მომხმარებლების პასუხების მართვა',
                    url: '/admin/manageFilledForms',
                    description: 'შეცვალეთ ან წაშალეთ ნებისმიერი მომხმარებლის პასუხი.'
                },
                {title: 'კომენტარების მართვა', url: '/admin/manageComments', description: 'ნებისმიერი კომენტარის წაშლა'}
            ]
        },
        home: "მთავარი",
        loading: "დაელოდეთ...",
        logOut: 'გამოსვლა',
        loginRegistration: {
            login: {
                title: 'ავტორიზაცია',
                loginBtn: 'შესვლა',
                redirectToRegister: {
                    text: 'არ გაქვთ ჯერ ანგარიში? ',
                    linkText: 'დარეგისტრირდით'
                }
            },
            registration: {
                title: 'რეგისტრაცია',
                registerBtn: 'რეგისტრაცია',
                redirectToLogin: {
                    text: 'გაქვთ უკვე ანგარიში? ',
                    linkText: 'ავტორიზაცია'
                },
                name: 'სახელი',
                namePlaceHolder: 'შეიყვანეთ სახელი',
            },
            email: 'მეილი',
            emailPlaceHolder: 'შეიყვანეთ მეილი',
            password: 'პაროლი',
            passwordPlaceHolder: 'შეიყვანეთ პაროლი',
        },
        usersPage: {
            title: 'მომხარებლები',
            name: 'სახელი',
            email: "მეილი",
            role: "როლი",
            status: "სტატუსი",
            admin: "ადმინისტრატორი",
            user: "მომხმარებელი",
            actions: "ქმედება",
            setAdminBtn: "ადმინად დანიშვნა",
            removeAdminBtn: "ადმინობის წაშლა",
            unblockUserBtn: "განბლოვკა",
            blockUserBtn: "დაბლოკვა",
            deleteUserBtn: "წაშლა",
            blocked: 'ბლოკირებული',
            unblocked: 'აქტიური',
            me: "მე"
        },
        addImage: 'სურათის დამატება',
        update: "განახლება",
        remove: 'წაშლა',
        title: 'სათაური',
        description: "აღწერა",
        topic: "თემა",
        tags: "თეგები",
        image: 'სურათი',
        deleteImage: 'სურათის წაშლა',
        minOneQuestion: 'საჭიროა მინიმუმ ერთი შეკითხვის დამატება',
        edit: "რედაქტირება",
        save: "შენახვა",
        create: 'შექმნა',
        delete: 'წაშლა',
        formFields: 'ფორმის ველები',
        fieldName: "ველის სახელი",
        fieldType: 'ველის ტიპი',
        text: 'ტექსტი',
        textarea: 'ვრცელი ტექსტი',
        select: 'რამოდენიმე პასუხი',
        boolean: 'თანხმობა/უარყოფა',
        hiddenQuestion: 'დაფარული შეკითხვა',
        cancel: 'გაუქმება',
        saveChanges: 'ცვლილებების შენახვა',
        addField: 'ველის დამატება',
        selectOptions: 'არჩეული პასუხები',
        saveOption: 'პასუხის რედაქტირება',
        addOption: 'პასუხის დამატება',
        reset: 'გასუფთავება',
        searchByTitle: 'ძებნა სათაურით',
        allTags: 'ყველა თეგი',
        allAuthors: 'ყველა ავტორი',
        usersAnswers: 'მომხმარებლების პასუხები',
        noFilledForms: 'შევსებული ფორმები არაა',
        myForms: 'ჩემი ფორმები',
        noForms: 'ფორმები არ მოიძებნა',
        filledBy: 'შეავსო',
        filledOn: 'შევსების თარიღი',
        author: 'ავტორი',
        createdOn: 'შექმნის თარიღი',
        comments: 'კომენტარები',
        writeComment: 'დაწერეთ კომენტარი',
        noComments: 'კომენტარები არაა',
        formTitle: 'ფორმის სათაური',
        formAuthor: 'ფორმის ავტორი',
        pageNotFound: 'უი! გვერდი არ მოიძებნა',
        pageNoExist: 'გვერდი, რომელსაც ეძებთ, არ არსებობს.',
        backHome: 'დაბრუნება მთავარ გვერდზე',
        question: 'შეკითხვა',
        questionType: 'შეკითხვის ტიპი',
        answer: 'პასუხი',
        forms: 'ფორმები',
        CreateForm: 'ფორმის შექმნა',
        chooseTemplate: 'აირჩიე შაბლონი',
        createNewForm: 'შექმენი ახალი ფორმა',
        questions: 'კითხვები',
        allComments: 'ყველა კომენტარი',
        manageForms: 'ფორმების მართვა',
        searchForms: 'ფორმების ძებნა',
        searchWord: 'საძიებო სიტყვა',
        search: 'ძებნა',
        filledForms: 'შევსებული ფორმები',
        fillAllFields: 'შეავსეთ ყველა ველი',
        notValidEmail: 'არასწორი ელფოსტა',
        undefined: 'ვერ იქნა ნაპოვნი',
        fillForm: 'ფორმის შევსება',
        enterName: 'გთხოვთ შეიყვანეთ სახელი',
        isInUse: 'უკვე გამოიყენება',
        minTwoOptions: 'გთხოვთ შეიყვანოთ სულ მცირე 2 პასუხი',
        yes: 'კი',
        no: 'არა'
    }
}