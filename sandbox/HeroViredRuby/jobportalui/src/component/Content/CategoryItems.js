/* eslint-disable */
import React, {useEffect, useState} from "react";
import CategoryItem from "./CategoryItem";
import AxiosConfig from "../../AxiosConfig";
import CategoryItemSkeleton from "../skeletons/CategoryItemSkeleton";
import { ICategory } from "../../interfaces";

const CategoryItems = () => {
    
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await AxiosConfig.get("categories/");
                setCategories(res.data);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        };

        fetchCategories().then();
    }, []);

    return (
        <section className="category section bg-gray">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Browse Categories</h2>
                    <p>Most popular categories of portal, sorted by popularity</p>
                </div>
                <div className="row">
                    {
                        loading && (
                            Array(6)
                                .fill(0)
                                .map((_, index) => (
                                    <CategoryItemSkeleton key={index}/>
                                ))
                        )
                    }
                    {
                        !loading &&
                        categories.map((category, index) => (
                            <CategoryItem category={category} index={index} key={category.name}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default CategoryItems;