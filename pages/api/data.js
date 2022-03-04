const dataInfor = [
    {
        "name":"ACID REFLUX",   
        "imageURL":"acid-reflux.jpg",
        "linkTo":"acid-reflux.html"
    },
    {
        "name":"WEIGHT LOSS",   
        "imageURL":"weight-loss.jpg",
        "linkTo":"weight-loss.html"
    },
    {
        "name":"ERECTILE DYSFUNCTION",   
        "imageURL":"erectile-dysfunction.png",
        "linkTo":"erectile-dysfunction.html"
    },
    {
        "name":"ASTHMA",   
        "imageURL":"asthma.jpg",
        "linkTo":"asthma.html"
    },
    {
        "name":"HAIR LOSS",   
        "imageURL":"hair-loss.jpg",
        "linkTo":"hair-loss.html"
    },
    {
        "name":"MIGRAINE",   
        "imageURL":"migraine.jpg",
        "linkTo":"migraine.html"
    },
    {
        "name":"PERIOD DELAY",   
        "imageURL":"period-delay.jpg",
        "linkTo":"period-delay.html"
    },
    {
        "name":"PREMATURE EJACULATION",   
        "imageURL":"premature-ejaculation.jpg",
        "linkTo":"premature-ejaculation.html"
    },
    {
        "name":"ACNE",   
        "imageURL":"acne.jpg",
        "linkTo":"acne.html"
    }
]



function data(req, res){
    res.status(200).json(dataInfor)
}

export default data