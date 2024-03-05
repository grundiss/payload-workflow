import React from "react";
import { CollectionConfig } from "payload/types";
import { Link } from "react-router-dom";
import {formatDate} from "payload/dist/admin/utilities/formatDate";
import {useConfig} from "payload/components/utilities";

export interface BoardCardDefaultContentProps {
    link: string
    admin: CollectionConfig['admin']
    data: any
}

const baseClass = 'board-card-content';

const BoardCardDefaultContent = ({admin, data, link}: BoardCardDefaultContentProps) => {
    const {admin: {dateFormat}} = useConfig();

    return (
      <div className={baseClass}>
        <Link to={link}>
            {admin?.useAsTitle && data[admin.useAsTitle]}
            {!admin?.useAsTitle && data.id}
        </Link>
        <div><small>{formatDate(data.createdAt, dateFormat)}</small></div>
      </div>
    )
}

export default BoardCardDefaultContent;