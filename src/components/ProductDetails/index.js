import React, { useEffect } from 'react';
import { PrimaryButton } from '../../elements/CustomButton';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsDroplet } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';
import { RiHospitalLine } from 'react-icons/ri';
import styles from "./index.module.scss";
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions/productAction';
import { useParams } from 'react-router';
import LoadingState from '../LoadingState';


const ProductDetails = (props) => {

    const { id } = useParams()

    useEffect(() => {
        props.loadProducts()
    }, [])

    const { products, isLoading } = props.products

    const product_details = products.find((product) => (
            product?._id === id
        ))

    console.log(product_details)

    if(isLoading){
        return(
            <LoadingState />
        )
    }
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.product_image}>
                    <img src={product_details?.productPhotoURL}/>
                </div>
                <div className={styles.product_info}>
                    <div className={styles.price_name}>
                        <h2>{product_details?.productName}</h2>
                        <h2>₦{product_details?.costPerUnit}</h2>
                    </div>
                    <div className={styles.product_tags}>
                            <p><AiOutlineAppstore className={styles.tag_icon}/> {product_details?.category.category}</p>
                            <p><BsDroplet  className={styles.tag_icon}/> {product_details?.composition}</p>
                            <p><RiHospitalLine  className={styles.tag_icon}/> {product_details?.supplier.supplierName}</p>
                    </div>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero minima voluptatem, praesentium, ipsam sunt perferendis assumenda enim error laborum obcaecati possimus. Maiores iste recusandae consequatur repudiandae. Ipsum, qui deserunt?</p>
                    </div>
                    <div className={styles.btn_contianer}>
                        <PrimaryButton className={styles.order_btn}><HiOutlineShoppingCart className={styles.order_icon} />Order</PrimaryButton>
                        <PrimaryButton className={styles.contact_btn}> <BiPhoneCall className={styles.contact_icon}/> Contact Supplier</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products:state.products
})

export default connect(mapStateToProps, {loadProducts}) (ProductDetails) 