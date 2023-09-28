import { StyledSectionInput } from "./styles";

export const Input = ({ id, placeholder, label, register, type }) => {
    return (
        <StyledSectionInput>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                placeholder={placeholder}
                {...register}
                type={type}
            />
        </StyledSectionInput>
    );
};
