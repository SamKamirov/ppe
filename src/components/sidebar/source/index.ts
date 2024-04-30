import { AppRoutes } from "../../../../const";

export type SidebarElement = {
    section: string;
    subsection: {
        title: string;
        link: AppRoutes
    }[]
};

export const sidebarElements: SidebarElement[] = [
    {
        section: 'Справочник',
        subsection: [
            {
                title: 'СИЗ',
                link: AppRoutes.Root
            },
            {
                title: 'Обоснование использования СИЗ',
                link: AppRoutes.Using
            },
            {
                title: 'Периодичность',
                link: AppRoutes.Periods
            },
            {
                title: 'Диапазоны роста',
                link: AppRoutes.Ranges
            }
        ]
    },
    {
        section: 'Отчёт',
        subsection: [
            {
                title: 'Проверка норм должностей',
                link: AppRoutes.RuleCheck
            },
            {
                title: 'Размеры',
                link: AppRoutes.Sizes
            },
            {
                title: 'Выдача',
                link: AppRoutes.Give
            }
        ]
    },
    {
        section: 'Сервис',
        subsection: [
            {
                title: 'Установка норм СИЗ',
                link: AppRoutes.SetRules
            }
        ]
    },
    {
        section: 'Инструменты',
        subsection: [
            {
                title: 'Личная карточка сотрудника',
                link: AppRoutes.PersonCard
            }
        ]
    }
];