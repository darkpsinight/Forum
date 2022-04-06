export const requests = {
    userapi: {
        register: '/auth',
        login: '/auth/login',
        logout: '/auth/logout',
        getme: '/auth/me',
        avatar: '/auth/avatar',
        update: '/auth'
    },
    postapi: {
        create: '/posts',
        getAll: '/posts',
        myposts: '/myposts',
    }
}