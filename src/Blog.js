

const Blog = ({blog}) =>{

    return (
        <section class="py-5">
        <div class="container px-5">
            <h2 class="fw-bolder fs-5 mb-4">Featured Stories</h2>
            <div class="row gx-5">
                {
                    blog.map((val, index)=> {
                        return (
                            <Card title={val.title} authorName={val.authorName} key={index}/>
                        )
                    })
                }
            </div>
            <div class="text-end mb-5 mb-xl-0">
                <a class="text-decoration-none" href="#!">
                    More stories
                    <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>
    )
}