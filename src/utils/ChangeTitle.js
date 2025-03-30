export default function ChangeTitle(text) {
    if (document.title !== text) {
        const title = text.replace("Google Custom Search", "Gogle Search");
        window.document.title = title;
    }
}
