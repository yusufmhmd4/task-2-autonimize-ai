# Full Stack Developer Assingment Answers

## Question 1: Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

**Answer:** The Relation between "Product" and "Product_Category" entities is :

--> The relationship between these two entities is one-to-many. A product can belong to one category (represented by the category_id foreign key in the Product table), but a       category can have many products. 

--> category_id as Foreign Key CONTRAINT in Product Entity.

--> The Cardinatility Ratio is 1 : M. 

--> For example, a product with a category_id of 1 might be a "t-shirt", and the product_category record with an id of 1 might be "clothing".

#

## Question 2: How could you ensure that each product in the "Product" table has a valid category assigned to it?

**Answer:** To ensure valid categories for products in the "Product" table:

**Not Null Constraint:**

Add a NOT NULL constraint to the category_id column.
Ensuring new products must have a valid category.

**Default Category:**

Set a default value for category_id ("Uncategorized").
New products will automatically get a category, even if generic.

**Foreign Key Relationship:**

Utilize the existing foreign key relationship.
While it ensures referential integrity, it won't prevent invalid categories.

--> NOT NULL is an effective validation

## Question 3: Create schema in any Database script?

**Answer:** Creating Schema's 

## Product Table
```mySQL
CREATE TABLE product (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    desc TEXT,
    SKU VARCHAR(255) UNIQUE,
    category_id INTEGER NOT NULL REFERENCES product_category(id) ON DELETE CASCADE,
    inventory_id INTEGER REFERENCES product_inventory(id) ON DELETE CASCADE,
    price DECIMAL,
    discount_id INTEGER REFERENCES discount(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);
```
## Product_Category ##
```mySQL
CREATE TABLE product_category (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    desc TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);
```

## Product_Inventory Table ##
```mySQL
CREATE TABLE product_inventory (
    id INTEGER PRIMARY KEY,
    quantity INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

```

## Discount Table ##
```mySQL
CREATE TABLE discount (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    desc TEXT,
    discount_percent DECIMAL NOT NULL,
    active BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);