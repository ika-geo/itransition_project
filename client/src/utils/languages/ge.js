export const ge = {
    translation: {
        'nav': [{label: "მთავარი", url: "/"}, {label: "თარგი", url: "/template"}, {label: "მომხმარებელი", url: "/user"}, {label: "ადმინი", url: "/admin"}],
        'adminDashboard': {
            header: 'ადმინ პანელი',
            buttonTitle: 'მართვა',
            items:[
                {title: 'მომხმარებლების მართვა', url: '/manageUsers', description: 'მომხმარებლების ნახვა, დაბლოკვა ან წაშლა. მომხმარებლების დაწინაურება ან ჩამოშორება ადმინისტრატორის როლიდან.'},
                {title: 'თარგების მართვა', url: '/manageTemplates', description: 'შეცვალეთ ან წაშალეთ ნებისმიერი მომხმარებლის შაბლონი, ან დაამატეთ მათ ახალი კითხვები.'},
                {title: 'მომხმარებლების პასუხების მართვა', url: '/manageUsersAnswers', description: 'შეცვალეთ ან წაშალეთ ნებისმიერი მომხმარებლის პასუხი.'},
                {title: 'თეგების მართვა', url: '/manageTags', description: 'შეცვალეთ ან წაშალეთ ნებისმიერი ტეგი, ან დაამატეთ ახალი.'}
            ]
        }
    }
}





