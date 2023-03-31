const commonProps={
    college:'Abc',
    location:'Efg'
}

const student1={
    name:'Ram',
    __Prot__:commonProps
};
const student2={
    name:'Akash',
    __Prot__:commonProps

};

console.log(student1.__Prot__.college);