const styles = theme => ({
    main: {
        width: "auto",
        display: "block", // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
            .spacing.unit * 3}px`
    },
    textBase: {
        margin: theme.spacing.unit,
        width: '100%',
        paddingRight: '15px'
    },
    btn: {
        marginTop: theme.spacing.unit * 3
    }
    ,
    btnPrimary: {
        background: theme.palette.evmaxPrimary,
        color:
            "white",
        "&:hover":
            {
                background: theme.palette.evmaxPrimary
            }
        ,
        width: '100%',
    }
    ,
    logo: {
        width: '128px',
        height:
            '100%',
        padding:
            '2px',
        margin:
            '8px 0'
    }
})
;

export default styles;
