let age: number
let userName: string
let isActive: boolean
let firstName = 'Moses'

firstName = 45 as any

type name = string

interface uniqueId {
    id: number
}

interface address extends uniqueId {
    address1: string,
    address2: string
}

// Enum declaration types

// it will take the index
enum rating {
    one,
    two,
    three,
    four,
    five
}

enum role {
    Admin = "admin",
    Guest = "guest"
}

type isAdmin = true | false

type customerType = 'supplier' | 'customer' | 'guest'

type score = rating | number


interface userModel extends uniqueId {
    firstName: name,
    lastName?: string,
    age?: number,
    hobbies?: string[],
    emails?: Array<string>,
    customProp?: any,
    address?: address,
    rating?: rating | number, // it 
    score?: score,
    role?: role,
    isAdmin?: isAdmin
}

type userModelFields = keyof userModel

let adminUserModelFields: userModelFields {
    
}

interface userWithAddress extends userModel, address {

}


type userWithAddress2 = userModel & address

let adminUserWithAddressProp: userWithAddress2 = {
    id: 3,
    firstName: "sdf",
    address1: "sdfsd",
    address2: null,
    isAdmin: true
}



let adminUserInfo: userModel = {
    id: 1,
    firstName: "Akash",
    rating: rating.five,
    role: role.Admin
}


function getValue(source, propertyName: keyof userModel) {
    return source[propertyName]
}

getValue(adminUserInfo, "firstName")
// line with issue
// getValue(adminUserInfo, "firstName2") // line with issue

function getValueFromGenericClass<T>(source: T, propertyName: keyof T) {
    return source[propertyName]
}

getValueFromGenericClass<userModel>(adminUserInfo, "firstName")
// line with issue
// getValueFromGenericClass<userModel>(adminUserInfo, "firstName") // line with issue


let listOfUsers: userModel[] = [
    { id: 2, firstName: "fdsd", rating: rating.five, role: role.Admin }
]



function cloneObj (source: userModel) {
    return Object.assign({}, source)
}

function cloneObjDefinedReturnType (source: userModel): userModel {
    return Object.assign({}, source)
}

function genericClone<T> (source: T): T {
    return Object.assign({}, source)
}

// function genericCloneCustomReturn<T1, T2 extends T1> (source: T1): T2 {
function genericCloneCustomReturn<T1, T2> (source: T2, source2: T1): T2 {
    return Object.assign({}, source)
}

let clonedAdminUserInfo = cloneObj(adminUserInfo);

clonedAdminUserInfo = genericClone<userModel>(adminUserInfo);
let clonedAdminUserInfo2 = genericClone<userModel>(adminUserInfo);

let clonedAdminUserInfo3 = genericCloneCustomReturn<userModel, userModel>(adminUserInfo, clonedAdminUserInfo2);

adminUserInfo.lastName = "J"

adminUserInfo.role = role.Guest

age = 25
userName = 'Akash'
isActive = true
console.log(`My name, ${userName} ${firstName}, My age is ${age}, he is ${isActive}`)