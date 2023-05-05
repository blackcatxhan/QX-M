var obj = JSON.parse($response.body); 
delete obj.data.preview_time;
// obj.data.preview_time = obj.data.total_time;
if (obj.data.next_content.service_info.service === "Y") {
	if (obj.data.next_content.service_info.flash_card !== "N") {
		obj.data.next_content.user_service_info.flash_card = obj.data.next_content.service_info.flash_card;
		obj.data.next_content.service_info.flash_card = "F";
	}
	if (obj.data.next_content.service_info.vocabulary !== "N") {
		obj.data.next_content.user_service_info.vocabulary = obj.data.next_content.service_info.vocabulary;
		obj.data.next_content.service_info.vocabulary = "F";
	}
	if (obj.data.next_content.service_info.ebook !== "N") {
		obj.data.next_content.user_service_info.ebook = obj.data.next_content.service_info.ebook;
		obj.data.next_content.service_info.ebook = "F";
	}
	if (obj.data.next_content.service_info.sentence !== "N") {
		obj.data.next_content.user_service_info.sentence = obj.data.next_content.service_info.sentence;
		obj.data.next_content.service_info.sentence = "F";
	}
	if (obj.data.next_content.service_info.quiz !== "N") {
		obj.data.next_content.user_service_info.quiz = obj.data.next_content.service_info.quiz;
		obj.data.next_content.service_info.quiz = "F";
	}
	if (obj.data.next_content.service_info.translate !== "N") {
		obj.data.next_content.user_service_info.translate = obj.data.next_content.service_info.translate;
		obj.data.next_content.service_info.translate = "F";
	}
	if (obj.data.next_content.service_info.story !== "N") {
		obj.data.next_content.user_service_info.story = obj.data.next_content.service_info.story;
		obj.data.next_content.service_info.story = "F";
	}
	if (obj.data.next_content.service_info.crossword !== "N") {
		obj.data.next_content.user_service_info.crossword = obj.data.next_content.service_info.crossword;
		obj.data.next_content.service_info.crossword = "F";
	}
	if (obj.data.next_content.service_info.original_text !== "N") {
		obj.data.next_content.user_service_info.original_text = obj.data.next_content.service_info.original_text;
		obj.data.next_content.service_info.original_text = "F";
	}
	if (obj.data.next_content.service_info.starwords !== "N") {
		obj.data.next_content.user_service_info.starwords = obj.data.next_content.service_info.starwords;
		obj.data.next_content.service_info.starwords = "F";
	}
}
$done({body: JSON.stringify(obj)});