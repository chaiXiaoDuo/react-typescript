// Because it references the react-router-config 
// props that carry route by default
export interface PublicProps {
    route?: any
    history?: any
}

export interface StoreState {
    toJs: any
}

export interface Reducer {
    home: object
}
