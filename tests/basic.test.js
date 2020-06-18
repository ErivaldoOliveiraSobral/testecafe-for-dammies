import { Selector } from "testcafe";

// prettier-ignore
fixture `Getting starter with TestCafe`
    .page `http://devexpress.github.io/testcafe/example`
    .before(async t => {
        // Configuração de todos os testes
    })
    .beforeEach(async t => {
        // Roda a cada teste
    })
    .after(async t => {
        // Roda após execução de todos os testes
    })
    .afterEach(async t => {
        // Roda após execução de cada teste
    })

test('My first testcafe Test', async t => {
    // here goes testcafe code
    await t.typeText("#developer-name", "Erivaldo")
    await t.click("#submit-button")

    await t.expect(Selector("#article-header").innerText).contains("Erivaldo!")
})