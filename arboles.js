const chalk= require("chalk");

class Node{
    constructor(id,nombre,cantidad,costo)
    {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.left = null;
        this.right = null;
        this.counter = 0;
    }
}

class Arbol{
    constructor(id){
        this.root = null;
    }

    insert(id,nombre,cantidad,costo)
    {
        let newNode = new Node(id,nombre,cantidad,costo);

        if(this.root === null)
        {
            this.root = newNode;
        }else
        {
             this.insertNode(this.root, newNode);
        }

    }

    insertNode(node, newNode)
    {
        if(newNode.id < node.id)
        {
            if(node.left === null)
            {
                node.left = newNode;
            }
            else 
            {
                this.insertNode(node.left, newNode);
            }
        }
        else //this.right
        {
            if(node.right === null)
            {
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }


    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(chalk.bold.green(node.id));
            this.inorder(node.right);
        }
    }

    preorder(node)
    {
        if(node !== null)
        {
            console.log(chalk.bold.red(node.id));
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node)
    {
        if(node !== null)
        {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(chalk.bold.blue(node.id));
        }
    }

    searchNode(node, idtobefound)
    {
        if(node === null)
        {
            return null;
        }
        else if (idtobefound < node.id){
          return  this.searchNode(node.left, idtobefound);
        }
        else if(idtobefound > node.id){
          return  this.searchNode(node.right, idtobefound);
        }
        else
        {
            return node;
        }

    }

    getrootnode()
    {
        return this.root;
    }

}

const BST = new Arbol();


BST.insert(15, "control", 3, 800);
BST.insert(25, "tarjeta-video", 5, 20000);
BST.insert(10, "ram", 4, 800);
BST.insert(7, "teclado", 5, 500);
BST.insert(22, "mouse", 8, 300);
BST.insert(17, "gabinete", 12, 2000);
BST.insert(13, "procesador", 4, 2500);
BST.insert(5, "ventilador", 6, 1400);

const root = BST.getrootnode();
BST.postorder(root);