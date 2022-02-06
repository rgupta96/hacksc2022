#include <iostream>
#include <string>
#include <fstream>
#include <vector>
#include <filesystem>
#include <unordered_map>
#include <utility> 
#include <math.h>
#include <algorithm> 
#include <set>

using namespace std;


string ProcessWord(string s)
{
	string t;
	
	// Remove punctuation.
    for (int i = 0; i < s.size(); i++)
        if (!ispunct(s[i]))
			t += s[i];

	// Convert to lower case.
	std::transform(t.begin(), t.end(), t.begin(), ::tolower);
	
	return t;
}

unordered_map <string,double> ParseFile(string filename, unordered_map <string,double> countMap, unordered_map <string,double> dictionary)
{
	set<string> hitWords;
	// Open file.
	ifstream in;
	in.open(filename.c_str());
	if (!in.is_open())
	{
		cout<<"File not found: "<<filename<<endl;
		//return NULL;
	}
	
	// Find the end of the header.
	string line;
	while (getline(in, line))
	{
		if (line == "")
			break;
	}

	// Read the rest of the file word by word.
	string word;
	while (in >> word)
	{
		// Strip the word of punctuation and convert to lower case.
		word = ProcessWord(word);
		
		if (word != "")
		{		
			// Do stuff here (for instance, check if the word is in the dictionary).
			// You might also like to make this function return something.
			//cout<<word<<endl;
			if(dictionary.find(word) != dictionary.end()){
				if(hitWords.find(word) == hitWords.end()){
					countMap[word]++;
					hitWords.insert(word);
				}
			}
		}
	}
	return countMap;
}

unordered_map <string,double> makeDictionary(string filename){
	unordered_map <string,double> dictionary;
	ifstream in;
	in.open(filename.c_str());
	if (!in.is_open())
	{
		cout<<"Dictionary file not found: "<<filename<<endl;
		//return NULL;
	}
	string word;
	while (in >> word){
		// Strip the word of punctuation and convert to lower case.
		word = ProcessWord(word);
		
		if (word != ""){
			dictionary.insert(make_pair<string,int>(word, 1));
		}
	}
	return dictionary;
}

double calcProb(string filename, unordered_map <string,double> countMap, unordered_map <string,double> dictionary, int total){
	double endProb = 0;
	set <string> hitWords;
	// Open file.
	ifstream in;
	in.open(filename.c_str());
	if (!in.is_open())
	{
		cout<<"File not found: "<<filename<<endl;
		//return NULL;
	}
	
	// Find the end of the header.
	string line;
	while (getline(in, line))
	{
		if (line == "")
			break;
	}

	// Read the rest of the file word by word.
	string word;
	while (in >> word)
	{
		// Strip the word of punctuation and convert to lower case.
		word = ProcessWord(word);
		
		if (word != "")
		{		
			// Do stuff here (for instance, check if the word is in the dictionary).
			// You might also like to make this function return something.
			//cout<<word<<endl;
			if(dictionary.find(word) != dictionary.end()){
				if(hitWords.find(word) == hitWords.end()){
					//endProb += log(countMap[word]);
					hitWords.insert(word);
				}
			}
		}
	}
	for (pair<string, double> i : dictionary){
		if(hitWords.find(i.first) == hitWords.end()){
			endProb += log(((total-(((total+2)*(countMap[i.first]))-1))+1)/(total+2));
		}
		else{
			endProb += log(countMap[i.first]);
		}
	}
	return endProb;
}



int main()
{
	double totals[] = {0, 0, 0, 0, 0};

	unordered_map <string,double> dictionary = makeDictionary("dictionary");
	unordered_map <string,double> countCompGraphicsMessages = dictionary;
	unordered_map <string,double> countSciSpace = dictionary;
	unordered_map <string,double> countTalkPoliticsMideast = dictionary;
	unordered_map <string,double> countRecSportBaseball = dictionary;
	
	string paths[] = {"comp.graphics", "sci.space", "talk.politics.mideast", "rec.sport.baseball"};

	string filename = "training_list";
	ifstream in;
	in.open(filename.c_str());
	if (!in.is_open())
	{
		cout<<"Train list file not found: "<<filename<<endl;
		//return NULL;
	}
	string line;
	while (getline(in, line)){
		if (line == ""){
			break;
		}
		string path = "";
		string i = "";
		for(int pos = 0; pos < line.length(); pos++){
			if(line[pos] == '\t'){
				i = line.at(line.length() - 1);
				break;
			}
			path += line.at(pos);
		}
		if(i == "0") {
			totals[0]++;
			countCompGraphicsMessages = ParseFile(path, countCompGraphicsMessages, dictionary);
			}
		else if(i == "1") {
			totals[1]++;
			countSciSpace = ParseFile(path, countSciSpace, dictionary);
			}
		else if(i == "2") {
			totals[2]++;
			countTalkPoliticsMideast = ParseFile(path, countTalkPoliticsMideast, dictionary);
			}
		else if(i == "3") {
			totals[3]++;
			countRecSportBaseball = ParseFile(path, countRecSportBaseball, dictionary);
			}
		totals[4]++;
	}
	for (pair<string, int> i : countCompGraphicsMessages){
		countCompGraphicsMessages[i.first] /= (totals[0] + 2);
	}
	for (pair<string, int> i : countSciSpace){
		countSciSpace[i.first] /= (totals[1] + 2);
	}
	for (pair<string, int> i : countTalkPoliticsMideast){
		countTalkPoliticsMideast[i.first] /= (totals[2] + 2);
	}
	for (pair<string, int> i : countRecSportBaseball){
		countRecSportBaseball[i.first] /= (totals[3] + 2);
	}


	double probabilityCompGraphicsMessages = log(totals[0] / totals[4]);
	double probabilitySciSpace = log(totals[1] / totals[4]);
	double probabilityTalkPoliticsMideast = log(totals[2] / totals[4]);
	double probabilityRecSportBaseball = log(totals[3] / totals[4]);
	//cout << probabilityCompGraphicsMessages << endl;

	ofstream network;
  	network.open ("network.txt");
	for (pair<string, int> i : dictionary){
		network << i.first;
		network << "\t0\t" << countCompGraphicsMessages[i.first] << endl;
		network << i.first;
		network << "\t1\t" << countSciSpace[i.first] << endl;
		network << i.first;
		network << "\t2\t" << countTalkPoliticsMideast[i.first] << endl;
		network << i.first;
		network << "\t3\t" << countRecSportBaseball[i.first] << endl;
	}
	network.close();

	for (pair<string, int> i : countCompGraphicsMessages){
		i.second = log(i.second);
	}
	for (pair<string, int> i : countSciSpace){
		i.second = log(i.second);
	}
	for (pair<string, int> i : countTalkPoliticsMideast){
		i.second = log(i.second);
	}
	for (pair<string, int> i : countRecSportBaseball){
		i.second = log(i.second);
	}




	int outputMatrix[4][4] = {0};
	int row;
	int col;
	filename = "test_list";
	ifstream inn;
	ofstream classification;
  	classification.open ("classification.txt");
	inn.open(filename.c_str());
	if (!inn.is_open())
	{
		cout<<"Train list file not found: "<<filename<<endl;
		//return NULL;
	}
	string linee;
	while (getline(inn, linee)){
		double probCompGraphics = 0;
		double probSciSpace = 0;
		double probTalkPoliticsMideast = 0;
		double probRecSportBaseball = 0;
		if (linee == ""){
			break;
		}
		string path = "";
		string i;
		for(int pos = 0; pos < linee.length(); pos++){
			if(linee[pos] == '\t'){
				i = linee.at(linee.length() - 1);
				break;
			}
			path += linee.at(pos);
		}
		row = stoi(i);
		pair<int, double> winner = make_pair(-1, -1);
		probCompGraphics = calcProb(path, countCompGraphicsMessages, dictionary, totals[0]) + probabilityCompGraphicsMessages;
		probSciSpace = calcProb(path, countSciSpace, dictionary, totals[1]) + probabilitySciSpace;
		if(probCompGraphics >= probSciSpace){
			winner = make_pair(0, probCompGraphics);
		}
		else{
			winner = make_pair(1, probSciSpace);
		}
		probTalkPoliticsMideast = calcProb(path, countTalkPoliticsMideast, dictionary, totals[2]) + probabilityTalkPoliticsMideast;
		if(probTalkPoliticsMideast > winner.second){
			winner = make_pair(2, probTalkPoliticsMideast);
		}
		probRecSportBaseball = calcProb(path, countRecSportBaseball, dictionary, totals[3]) + probabilityRecSportBaseball;
		if(probRecSportBaseball > winner.second){
			winner = make_pair(3, probRecSportBaseball);
		}
		classification << path << "\t" << i << "\t" << winner.first << endl;
		col = (int)winner.first;
		outputMatrix[row][col]++;
	}
	classification.close();

	ofstream mtrx;
  	mtrx.open ("classification-summary.txt");
	for(int x = 0; x < 4; x++){
		for(int y = 0; y < 4; y++){
			mtrx << outputMatrix[x][y];
			if(y < 3){
				mtrx << "\t";
			}
		}
		if(x < 3){
			mtrx << endl;
		}
	}
	mtrx.close();

	return 0;
}