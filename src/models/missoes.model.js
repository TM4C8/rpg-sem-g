import { DataTypes } from "sequelize";
import sequelize from "../config/database";
import { type } from "os";

const db_missoes = (sequelize,DataTypes)=>{
    const Missoes = sequelize.define(
        'Missoes',
        {
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            descricao:{
                type: DataTypes.STRING,
                allowNull: false
            },
            nex:{
                type: DataTypes.INTERGER,
                allowNull: false
            }
        }
    )
}
//limite de personagens, recompensas, status, para desbloquear;