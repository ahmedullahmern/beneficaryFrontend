const devUrl = "http://localhost:4000/"
const proudUrl = "https://beneficary-backend.vercel.app/"

export const Base_Url = devUrl

export const AppRoutes = {
    signup: Base_Url + "auth/register",
    createStaff: Base_Url + "auth/register/admin",
    login: Base_Url + "auth/login",
    register: Base_Url + "auth/seekerRegister",
    seekerGetByDepartment: Base_Url + "auth/seeker/:id",
    statusUpdateByDepartment: Base_Url + "auth/seeker/:id/status",
    seekerGetByAdmin: Base_Url + "auth/admin/reports",
    seekerSeeMyStatus: Base_Url + "auth/seeker/status/:cnic",
    DepartmentSeeker: Base_Url + "auth/:dept/seekers",
    getMyInfo: Base_Url + "users/myInfo",
    seekerDownload: Base_Url + "auth/seekerDownload/:id",

}