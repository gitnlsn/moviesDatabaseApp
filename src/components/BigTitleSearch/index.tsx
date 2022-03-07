import React, { useState } from "react";
import { Form, Input } from "./styles";

interface TitleSearchProps {
    onSubmit: (title: string) => void;
}

export const BigTitleSearch: React.FC<TitleSearchProps> = ({
    onSubmit
}) => {
    const [title, setTitle] = useState('');

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        onSubmit(title);
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            <Input
                value={title}
                placeholder="Enter movie title"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
            />
            <input type='submit' hidden />
        </Form>
    );
}
