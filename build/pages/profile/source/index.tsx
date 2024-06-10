import { AppRoutes } from '../../../../const';

export const profileSideBarElements = [
    {
        section: 'Разделы',
        subsection: [
            {
                title: 'Информация',
                link: AppRoutes.Info
            },
            {
                title: 'Сотрудники',
                icon: 'bi bi-person-circle',
                link: AppRoutes.Employee
            }
        ]
    }
]