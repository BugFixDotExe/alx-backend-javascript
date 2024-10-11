interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Jamal',
    lastName: 'Muhammad Ibn Rushd',
    age: 2330,
    location: 'Iraq'
};

const student2: Student = {
    firstName: 'Yaris',
    lastName: 'Ikhas',
    age: 130,
    location: 'Russia'
};

const studentsList: Student[] = [student1, student2];
