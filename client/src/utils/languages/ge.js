export const ge = {
    translation: {
        nav: [{label: "მთავარი", url: "/"}, {label: "ადმინი", url: "/admin"}, {label: "ფორმები", url: "/forms"}],
        adminDashboard: {
            header: 'ადმინ პანელი',
            buttonTitle: 'მართვა',
            items:[
                {title: 'მომხმარებლების მართვა', url: '/manageUsers', description: 'მომხმარებლების ნახვა, დაბლოკვა ან წაშლა. მომხმარებლების დაწინაურება ან ჩამოშორება ადმინისტრატორის როლიდან.'},
                {title: 'თარგების მართვა', url: '/manageTemplates', description: 'შეცვალეთ ან წაშალეთ ნებისმიერი მომხმარებლის შაბლონი, ან დაამატეთ მათ ახალი კითხვები.'},
                {title: 'მომხმარებლების პასუხების მართვა', url: '/manageUsersAnswers', description: 'შეცვალეთ ან წაშალეთ ნებისმიერი მომხმარებლის პასუხი.'},
                {title: 'თეგების მართვა', url: '/manageTags', description: 'შეცვალეთ ან წაშალეთ ნებისმიერი ტეგი, ან დაამატეთ ახალი.'}
            ]
        },
        loading: "დაელოდეთ...",
        logOut: 'გამოსვლა',
        loginRegistration:{
            login:{
                title: 'ავტორიზაცია',
                loginBtn: 'შესვლა',
                redirectToRegister:{
                    text: 'არ გაქვთ ჯერ ანგარიში? ',
                    linkText: 'დარეგისტრირდით'
                }
            },
            registration:{
                title: 'რეგისტრაცია',
                registerBtn: 'რეგისტრაცია',
                redirectToLogin:{
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
        usersPage:{
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
        }
    }
}





