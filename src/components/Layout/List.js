import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
    &::before {
        content: '> ';
        font-weight: bold;
    }
`;

export default List;
