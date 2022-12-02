import { initializeApp } from "firebase/app";
import {collection, getFirestore, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY ,
  authDomain: "react-37090-b7583.firebaseapp.com",
  projectId: "react-37090-b7583",
  storageBucket: "react-37090-b7583.appspot.com",
  messagingSenderId: "243557612808",
  appId: "1:243557612808:web:6f46cc4c5163026ac800bd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()
/*
    C
            CREATE  
    R
            READ    
    U
            UPDATE
    D
            DELETE
*/
const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.name,
            marca: prod.brand,
            stock: prod.stock ,
            alcohol: prod.alcohol,
            descripcion: prod.description,
            precio: prod.price,
            img: prod.img,
            idCategoria: prod.idCat
        })
    })
}

//Read Producto
const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
}

const getProducto = async (id) => {
    const prod = await getDoc(doc(db, "productos",id))
    const item = {...prod.data(), id: prod.id}
    return item
}

//Create producto
/*const createProducto = async (objProducto)=>{
    const estado = await addDoc(collection(db, "productos"),{
        nombre: objProducto.name,
        marca: objProducto.brand,
        stock: objProducto.stock ,
        alcohol: objProducto.alcohol,
        descripcion: objProducto.description,
        precio: objProducto.price,
        img: objProducto.img,
        idCategoria: objProducto.idCat
    })

    return estado
}

//Update producto
const updateProducto = async(id, info) =>{
    const estado = await updateDoc(doc(db, "productos",id), info)
    return estado
}

//delete producto

const deleteProducto = async(id) =>{
    const estado = await deleteDoc(doc(db,"productos", id))
    return estado
}

//Create anda read ordenes de compra
const createOrdenCompra = async (cliente, preTotal)=>{
    const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
        nombre: cliente.nombre,
        apellido:cliente.apellido,
        email:cliente.email ,
        dni:cliente.dni ,
        direcccion:cliente.direccion ,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra=async(id)=>{
    const item = await getDoc(doc(db,"ordenCompra"), id)
    const ordenCompra = {...item.data(), id: item.id}
    return ordenCompra
}
*/
export {cargarBDD, getProductos, getProducto}