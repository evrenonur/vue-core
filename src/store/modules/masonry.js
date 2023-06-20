import masonry from "../../data/masonry.json"

const state = {
    imgs : masonry.imgs,
    imagearray:masonry.imagearray,
    images: masonry.images,
    imags: masonry.imags,
    photo: masonry.photo,
    search: masonry.search,
    hover : masonry.hover,
    aos : masonry.aos
};

export default {
    namespaced: true,
    state,
}