export const ge = {
    translation: {
        nav: [{label: "მთავარი", url: "/"}, {label: "ადმინი", url: "/admin"}, {label: "ფორმები", url: "/forms"}, {label: "ჩემი გვერდი", url: "/myPage"}],
        adminDashboard: {
            header: 'ადმინ პანელი',
            buttonTitle: 'მართვა',
            items:[
                {title: 'მომხმარებლების მართვა', url: '/admin/manageUsers', description: 'მომხმარებლების ნახვა, დაბლოკვა ან წაშლა. მომხმარებლების დაწინაურება ან ჩამოშორება ადმინისტრატორის როლიდან.'},
                {title: 'ფორმების მართვა', url: '/admin/manageForms', description: 'შეცვალეთ ან წაშალეთ ნებისმიერი მომხმარებლის ფორმა, ან დაამატეთ მათ ახალი კითხვები.'},
                {title: 'მომხმარებლების პასუხების მართვა', url: '/admin/manageFilledForms', description: 'შეცვალეთ ან წაშალეთ ნებისმიერი მომხმარებლის პასუხი.'},
                {title: 'კომენტარების მართვა', url: '/admin/manageComments', description: 'ნებისმიერი კომენტარის წაშლა'}
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





