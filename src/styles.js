const colors = {
    darkBg: '#212529',
    darkText: '#f8f9fa',
    accent: '#0dcaf0',
    border: '#6c757d',
    bgSecondary: '#343a40',
};

export const itemStyles = {
    // Home
    containerHome: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '4rem',
        backgroundColor: colors.bgSecondary,
    },
    colHome: {
        textAlign: 'center',
        marginBottom: '1rem',
    },
    header: {
        marginBottom: '1.25rem',
        fontSize: '1.8rem',
        color: colors.darkText,
    },
    bioFirstRow: {
        marginBottom: '0.75rem',
        fontSize: '2rem',
        fontWeight: 700,
        color: colors.accent,
    },
    bioSecondRow: {
        marginBottom: '1rem',
        fontSize: '1.6rem',
        fontWeight: 700,
        color: colors.darkText,
    },
    btn: {
        marginTop: '1.2rem',
    },
    image: {
        maxWidth: '10rem',
        borderRadius: '50%',
    },
};
