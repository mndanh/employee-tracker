INSERT INTO department (department_name)
VALUES 
        ('Engineering'),
        ('Finance'),
        ('Legal'),
        ('Sales'),
        ('Human Resources'),
        ('Marketing'),
        ('Customer Support'),
        ('Product Management');

INSERT INTO roles (title, salary, department_id)
VALUES 
        ('Engineering Director', 120000, 1),
        ('Software Engineer', 95000, 1),
        ('Finance Manager', 85000, 2),
        ('Financial Analyst', 70000, 2),
        ('Legal Assistant', 45000, 3),
        ('Corporate Counsel', 110000, 3),
        ('Sales Associate', 75000, 4),
        ('Sales Manager', 95000, 4),
        ('HR Specialist', 60000, 5),
        ('HR Manager', 85000, 5),
        ('Marketing Coordinator', 55000, 6),
        ('Marketing Director', 105000, 6),
        ('Customer Support Rep', 45000, 7),
        ('Customer Support Manager', 75000, 7),
        ('Product Manager', 115000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
        ('Jim', 'Smith', 1, NULL),
        ('Lisa', 'Johnson', 3, 2),
        ('Mark', 'Thompson', 4, 2),
        ('Scott', 'Ryan', 5, 1),
        ('Sarah', 'Miller', 6, 1),
        ('Laura', 'Brown', 8, 2),
        ('Tom', 'Wilson', 7, 6),
        ('Nancy', 'Davis', 10, 5),
        ('Chris', 'Moore', 9, 5),
        ('Angela', 'Taylor', 12, 8),
        ('Kevin', 'Anderson', 11, 8),
        ('Emily', 'White', 13, 7),
        ('Jason', 'Harris', 14, 7),
        ('Brian', 'Martin', 2, 1),
        ('Diane', 'Clark', 15, 5),
        ('George', 'Lewis', 2, 1),
        ('Ruth', 'Walker', 4, 2),
        ('James', 'Young', 7, 6),
        ('Betty', 'Hall', 10, 5),
        ('Patricia', 'Allen', 13, 7),
        ('Robert', 'King', 11, 8),
        ('Susan', 'Wright', 12, 8),
        ('Barbara', 'Scott', 9, 5),
        ('Michael', 'Green', 6, 1),
        ('Linda', 'Adams', 14, 7);