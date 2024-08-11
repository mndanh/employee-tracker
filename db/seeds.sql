INSERT INTO department (id, department_name)
VALUES (1, 'Engineering'),
        (2, 'Finance'),
        (3, 'Legal'),
        (4, 'Sales');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Engineering Director', 120000, 1),
        (2, 'Finance Manager', 85000, 2),
        (3, 'Legal Assistant', 45000, 3),
        (4, 'Sales Associate', 75000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Jim', 'Smith', 1),
        (2, 'Lisa', 'Johnson', 2, 2),
        (3, 'Mark', 'Thompson', 4, 4),
        (4, 'Scott', 'Ryan', 3, 1);
