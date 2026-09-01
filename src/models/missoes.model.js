import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const db_missoes = (sequelize,DataTypes)=>{
    const Missoes = sequelize.define(
        'Missoes',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            }
        }
    )
}